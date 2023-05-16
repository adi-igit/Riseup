import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const InvestedCoinsTd = ({}: Props) => {
  return (
    <tr className="h-12">
      <td>USD Dollar</td>
      <td>125.95</td>
      <td>$ 5,325.95</td>
      <td>$ 5,325.95</td>
      <td>$ 5,325.95</td>
      <td className="flex text-green-500">
        <FiArrowUpRight />
        <span>+10.50%</span>
      </td>
    </tr>
  );
};

export default InvestedCoinsTd;
