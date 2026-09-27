import Svg, { Path, RNSVGCircle } from "react-native-svg";

const HostIcon = ({ width = 11, height = 14, color = "#E61C44" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 11 14" fill="none">
      <Path d="M0 14C0 12.5855 0.561903 11.229 1.5621 10.2288C2.56229 9.22857 3.91885 8.66667 5.33333 8.66667C6.74782 8.66667 8.10437 9.22857 9.10457 10.2288C10.1048 11.229 10.6667 12.5855 10.6667 14H0ZM5.33333 8C3.12333 8 1.33333 6.21 1.33333 4C1.33333 1.79 3.12333 0 5.33333 0C7.54333 0 9.33333 1.79 9.33333 4C9.33333 6.21 7.54333 8 5.33333 8Z" fill={color} />
    </Svg>
  );
};

export default HostIcon;

