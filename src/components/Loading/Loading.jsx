import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#3b82f6",
    "1.0": "#3b49f6"
  },
  shadowBlur: 5
});

const Loading = () => {
  return  <TopBarProgress />
};

export default Loading