import { useTable } from 'react-table';

interface DataTableProps {
    columns: Array<{ Header: string; accessor: string; Cell?: any }>;
    data: Array<{ [key: string]: any }>;
}

const DataTable = ({ columns, data }: DataTableProps) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <table
            {...getTableProps()}
            className="min-w-full divide-y divide-gray-200 table-fixed border border-light-border"
        >
            <thead className="bg-light-primary">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                className="px-6 py-3 text-left text-xs font-medium text-light-text uppercase tracking-wider"
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} className="bg-light-background">
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className="hover:bg-light-secondary">
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-light-text"
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTable;
