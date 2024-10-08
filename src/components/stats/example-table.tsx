'use client';

import { faStar as farStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faStar as fasStar,
  faSort,
  faSortDown,
  faSortUp,
  faExternalLinkAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Chip,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import exampleData, { ExampleItem } from '@/constants/example-data';
import { Select, SelectItem } from '@nextui-org/react';

export default function ExampleTable() {
  const [data, setData] = useState<ExampleItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState<keyof ExampleItem | ''>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const columnsToShow: (keyof ExampleItem)[] = [
    'name',
    'category',
    'sub_category',
    'desc',
    'score',
    'review_count',
    'price_text',
    'estimate_revenue',
    'url',
  ];
  const sortableColumns: (keyof ExampleItem)[] = ['score', 'review_count', 'estimate_revenue'];

  const columnAliases: Record<keyof ExampleItem, string> = {
    id: 'ID',
    name: 'Name',
    category: 'Category',
    sub_category: 'Sub Category',
    desc: 'Description',
    score: 'Rate',
    review_count: 'Review Count',
    price_text: 'Price',
    estimate_revenue: 'Estimated Revenue',
    url: 'Action',
  };

  const [label1Options, setLabel1Options] = useState<string[]>([]);
  const [selectedLabel1, setSelectedLabel1] = useState<string>('');

  const [scoreLow, setScoreLow] = useState('');
  const [scoreHigh, setScoreHigh] = useState('');
  const [reviewCountLimit, setReviewCountLimit] = useState('');

  useEffect(() => {
    fetchData();
    fetchLabel1Options();
  }, [sortBy, order, selectedLabel1, scoreLow, scoreHigh, reviewCountLimit]);

  const fetchLabel1Options = async () => {
    try {
      const labels = Array.from(new Set(exampleData.map((item) => item.category)));
      setLabel1Options(labels);
    } catch (error) {
      console.error('Error fetching label1 options:', error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let filteredData = [...exampleData];

      // 过滤逻辑
      if (selectedLabel1 && selectedLabel1 !== 'all') {
        filteredData = filteredData.filter((item) => item.category === selectedLabel1);
      }
      if (scoreLow) {
        filteredData = filteredData.filter((item) => item.score >= parseFloat(scoreLow));
      }
      if (scoreHigh) {
        filteredData = filteredData.filter((item) => item.score <= parseFloat(scoreHigh));
      }
      if (reviewCountLimit) {
        filteredData = filteredData.filter((item) => item.review_count >= parseInt(reviewCountLimit));
      }

      // 排序逻辑
      if (sortBy) {
        filteredData.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (column: keyof ExampleItem) => {
    if (sortableColumns.includes(column)) {
      if (sortBy === column) {
        setOrder(order === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(column);
        setOrder('asc');
      }
    }
  };

  const handleScoreLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
      setScoreLow(value);
    }
  };

  const handleScoreHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
      setScoreHigh(value);
    }
  };

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger'];

  const hashString = (str: string): number => {
    if (!str) return 0;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  // 根据 label1 获取颜色
  const getLabelColor = (label: string): string => {
    const index = hashString(label) % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full px-4 xl:px-12 2xl:px-24">
      <div className="mb-4 flex flex-wrap gap-4">
        <Select
          label="Filter by Category"
          placeholder="Select a Category"
          className="max-w-xs"
          onChange={(e) => {
            setSelectedLabel1(e.target.value);
          }}
        >
          {[
            <SelectItem key="all" value="all">
              All Categories
            </SelectItem>,
            ...label1Options.map((label) => (
              <SelectItem key={label} value={label}>
                {label}
              </SelectItem>
            )),
          ]}
        </Select>
        <Input
          type="number"
          label="Min Score"
          placeholder="0-5"
          className="max-w-[100px]"
          value={scoreLow}
          onChange={handleScoreLowChange}
          min={0}
          max={5}
          step={0.1}
        />
        <Input
          type="number"
          label="Max Score"
          placeholder="0-5"
          className="max-w-[100px]"
          value={scoreHigh}
          onChange={handleScoreHighChange}
          min={0}
          max={5}
          step={0.1}
        />
        <Input
          type="number"
          label="Minimum Review Count"
          placeholder="Enter minimum review count"
          className="max-w-xs"
          value={reviewCountLimit}
          onChange={(e) => {
            setReviewCountLimit(e.target.value);
          }}
        />
      </div>
      {isLoading && (
        <div className="flex justify-center items-center h-10 mb-4">
          <Spinner size="sm" />
          <span className="ml-2">Loading data...</span>
        </div>
      )}
      {data.length === 0 ? (
        <span>No example data available.</span>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <Table aria-label="Example data table" className="w-full min-w-full">
              <TableHeader>
                {columnsToShow.map((column) => (
                  <TableColumn
                    key={column}
                    onClick={() => handleSort(column)}
                    style={{ cursor: sortableColumns.includes(column) ? 'pointer' : 'default' }}
                  >
                    <div className="flex items-center">
                      {sortableColumns.includes(column) && (
                        <FontAwesomeIcon icon={faSort} className="mr-2 text-gray-400" />
                      )}
                      {columnAliases[column]}
                      {sortableColumns.includes(column) && sortBy === column && (
                        <FontAwesomeIcon icon={order === 'asc' ? faSortUp : faSortDown} className="ml-2" />
                      )}
                      {column === 'estimate_revenue' && (
                        <Tooltip
                          content={
                            <>
                              Estimated Revenue is calculated as review_count * price. <br />
                              The actual revenue might be higher.
                            </>
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-gray-400 cursor-help" />
                        </Tooltip>
                      )}
                    </div>
                  </TableColumn>
                ))}
              </TableHeader>

              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    {columnsToShow.map((column) => (
                      <TableCell key={column}>
                        {column === 'url' ? (
                          <Button
                            as="a"
                            href={row[column]}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            size="sm"
                            startContent={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                          >
                            Visit
                          </Button>
                        ) : column === 'name' ? (
                          <strong>{row[column]}</strong>
                        ) : column === 'score' ? (
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => {
                              const score = parseFloat(row[column].toString());
                              return (
                                <FontAwesomeIcon
                                  key={i}
                                  icon={score >= i + 1 ? fasStar : score >= i + 0.5 ? faStarHalfAlt : farStar}
                                  className="text-yellow-400 mr-1"
                                />
                              );
                            })}
                            <span className="ml-2">{row[column]}</span>
                          </div>
                        ) : column === 'category' ? (
                          row.category ? (
                            <Chip color={getLabelColor(row.category)} variant="flat">
                              {row.category}
                            </Chip>
                          ) : null
                        ) : column === 'sub_category' ? (
                          row.sub_category ? (
                            <Chip color="default" variant="flat">
                              {row.sub_category}
                            </Chip>
                          ) : null
                        ) : column === 'estimate_revenue' ? (
                          `$${row.estimate_revenue.toFixed(2)}`
                        ) : column === 'price_text' ? (
                          row.price_text
                        ) : (
                          row[column]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
