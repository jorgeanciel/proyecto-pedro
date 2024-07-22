type TableProps = {
  heads: string[];
  children: React.ReactNode;
};

type ColTableProps = {
  value: string;
};

export const ColTable: React.FC<ColTableProps> = ({ value }) => {
  return (
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {value}
    </th>
  );
};
type RowTableProps = {
  children: React.ReactNode;
};
export const RowTable: React.FC<RowTableProps> = ({ children }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {children}
    </tr>
  );
};

type ItemActionProps = {
  onClickEdit: () => void;
};

export const ItemAction: React.FC<ItemActionProps> = ({ onClickEdit }) => {
  return (
    <td className="flex items-center px-6 py-4">
      <a
        onClick={onClickEdit}
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit
      </a>
    </td>
  );
};

const Table: React.FC<TableProps> = ({ heads, children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {heads?.map((value) => (
              <th key={`head-${value}`} scope="col" className="px-6 py-3">
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
