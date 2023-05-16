type Props = {};

const TrHistoryTd = ({}: Props) => {
  return (
    <tr className="h-12 text-gray-500">
      <td>$ 800.00</td>
      <td className="text-red-500">Deposited</td>
      <td>03March23 16:50:30</td>
      <td>UPI</td>
      <td>Successful</td>
    </tr>
  );
};

export default TrHistoryTd;
