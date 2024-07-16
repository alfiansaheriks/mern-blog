import React from 'react';

const TableArticle = ({ columns, data }) => {
  return (
    <table className="min-w-full bg-white rounded-lg">
      <thead className="rounded-t-lg bg-gray-200">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="py-2 px-4 border-b first:rounded-tl-lg last:rounded-tr-lg">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        {data.map((row, rowIndex) => (
          <tr key={row._id || rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="py-2 px-4 border-b">
                {column.render ? column.render(row) : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableArticle;
