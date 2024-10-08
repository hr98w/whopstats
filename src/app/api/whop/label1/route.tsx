import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from('whop_statistics').select('label1');

    if (error) throw error;

    // 提取所有不同的label1值
    const distinctLabels = Array.from(new Set(data.map((item) => item.label1).filter(Boolean)));

    return NextResponse.json({ labels: distinctLabels });
  } catch (error) {
    console.error('Error fetching distinct labels:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
