import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabase = createClient();
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '20');
  const sortBy = searchParams.get('sortBy');
  const order = searchParams.get('order')?.toLowerCase();
  const label1 = searchParams.get('label1');
  // 添加新的参数
  const scoreLow = parseFloat(searchParams.get('scoreLow') || '0');
  const scoreHigh = parseFloat(searchParams.get('scoreHigh') || '5'); // 假设最高分为 5
  const reviewCountLimit = parseInt(searchParams.get('reviewCountLimit') || '0');

  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const columnsToShow = [
    'url',
    'name',
    'desc',
    'score',
    'review_count',
    'label1',
    'label2',
    'price_text',
    'estimate_revenue',
  ];

  try {
    let query = supabase.from('whop_statistics').select(columnsToShow.join(', '), { count: 'exact' }).range(start, end);

    // 添加新的筛选条件
    if (scoreLow >= 0) {
      query = query.gte('score', scoreLow);
    }
    if (scoreHigh <= 5) {
      // 假设最高分为 5
      query = query.lte('score', scoreHigh);
    }

    if (reviewCountLimit >= 0) {
      query = query.gte('review_count', reviewCountLimit);
    }

    // 添加排序逻辑
    if (sortBy && ['score', 'review_count', 'estimate_revenue'].includes(sortBy)) {
      const ascending = order === 'asc';
      query = query.order(sortBy, { ascending });
    }

    if (label1 && label1 !== 'all' && label1 !== '') {
      query = query.eq('label1', label1);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    // 添加 URL 后缀
    const modifiedData = data.map((item: Record<string, any>) => ({
      ...item,
      url: item.url ? `${item.url}?a=indiehacker` : item.url,
    }));

    return NextResponse.json({
      data: modifiedData,
      count,
      page,
      pageSize,
      sortBy,
      order,
      scoreLow,
      scoreHigh,
      reviewCountLimit,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
