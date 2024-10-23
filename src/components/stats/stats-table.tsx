'use client';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faExternalLinkAlt,
  faInfoCircle,
  faSort,
  faSortDown,
  faSortUp,
  faStar as fasStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Chip,
  Input,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import { useEffect, useState, useMemo } from 'react';

export default function StatsTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('desc');
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const columnsToShow = [
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
  const sortableColumns = ['score', 'review_count', 'estimate_revenue'];

  const columnAliases = {
    name: 'Name',
    category: 'Category',
    sub_category: 'Sub Category',
    desc: 'Description',
    score: 'Rate',
    review_count: 'Review Count',
    price_text: 'Price',
    estimate_revenue: 'Estimated Revenue',
    url: 'Action',
  } as const;

  type ColumnAlias = keyof typeof columnAliases;

  const [label1Options, setLabel1Options] = useState<string[]>([]);
  const [selectedLabel1, setSelectedLabel1] = useState<string>('');

  const [scoreLow, setScoreLow] = useState('');
  const [scoreHigh, setScoreHigh] = useState('');
  const [reviewCountLimit, setReviewCountLimit] = useState('');

  useEffect(() => {
    fetchData();
    fetchLabel1Options();
  }, [currentPage, sortBy, order, selectedLabel1, scoreLow, scoreHigh, reviewCountLimit, rowsPerPage]);

  const fetchLabel1Options = async () => {
    try {
      const response = await fetch('/api/whop/label1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setLabel1Options(result.labels);
    } catch (error) {
      console.error('Error fetching label1 options:', error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/whop?page=${currentPage}&pageSize=${rowsPerPage}&sortBy=${sortBy}&order=${order}&label1=${selectedLabel1}&scoreLow=${scoreLow}&scoreHigh=${scoreHigh}&reviewCountLimit=${reviewCountLimit}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.data);
      setTotalCount(result.count);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (column: string) => {
    if (sortableColumns.includes(column)) {
      if (sortBy === column) {
        setOrder(order === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(column);
        setOrder('desc');
      }
    }
  };

  const handleScoreLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
      setScoreLow(value);
      resetToFirstPage();
    }
  };

  const handleScoreHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
      setScoreHigh(value);
      resetToFirstPage();
    }
  };

  const hashString = (str: string): number => {
    if (!str) return 0;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;

  const getLabelColor = (label: string): (typeof colors)[number] => {
    const index = hashString(label) % colors.length;
    return colors[index];
  };

  const resetToFirstPage = () => {
    setCurrentPage(1);
  };

  const totalPages = useMemo(() => Math.ceil(totalCount / rowsPerPage), [totalCount, rowsPerPage]);

  return (
    <div className="w-full px-4 xl:px-12 2xl:px-24 pb-8">
      <div className="mb-4 flex flex-wrap gap-4">
        <Select
          label="Filter by Category"
          placeholder="Select a Category"
          className="max-w-xs"
          onChange={(e) => {
            setSelectedLabel1(e.target.value);
            resetToFirstPage();
          }}
        >
          {[
            <SelectItem key="all" value="">
              All
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
            resetToFirstPage();
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
        <span></span>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <Table aria-label="CSV data table" className="w-full min-w-full">
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
                      {columnAliases[column as ColumnAlias]}
                      {column === 'estimate_revenue' && (
                        <Tooltip
                          content={
                            <>
                              Whop does not display specific sales volume.
                              <br />
                              This column is derived from review_count * price. <br />
                              The real revenue is much higher.
                            </>
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-gray-400 cursor-help" />
                        </Tooltip>
                      )}
                      {sortableColumns.includes(column) && sortBy === column && (
                        <FontAwesomeIcon icon={order === 'asc' ? faSortUp : faSortDown} className="ml-2" />
                      )}
                    </div>
                  </TableColumn>
                ))}
              </TableHeader>

              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
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
                              const score = parseFloat(row[column]);
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
                          row['label1'] ? (
                            <Chip color={getLabelColor(row['label1'])} variant="flat">
                              {row['label1']}
                            </Chip>
                          ) : null
                        ) : column === 'sub_category' ? (
                          row['label2'] && (
                            <Chip color="default" variant="flat">
                              {row['label2']}
                            </Chip>
                          )
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
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/3"></div> {/* Spacer */}
            <div className="flex justify-center w-1/3">
              <Pagination total={totalPages} page={currentPage} onChange={(page) => setCurrentPage(page)} />
            </div>
            <div className="flex justify-end w-1/3">
              <div className="flex items-center space-x-2">
                {isLoading && <Spinner size="sm" />}
                <p>rows/page:</p>
                <Select
                  size="sm"
                  defaultSelectedKeys={[rowsPerPage.toString()]}
                  value={rowsPerPage.toString()}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="min-w-[70px]"
                >
                  {[10, 20, 50, 100].map((pageSize) => (
                    <SelectItem key={pageSize.toString()} value={pageSize.toString()}>
                      {pageSize.toString()}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
