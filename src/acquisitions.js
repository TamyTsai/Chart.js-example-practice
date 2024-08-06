import Chart from 'chart.js/auto'
// 我們從特殊的 Chart.js/auto 路徑匯入 Chart，即主要的 Chart.js 類別。 它會載入所有可用的 Chart.js 元件（這非常方便），但不允許進行tree-shaking。 我們稍後會解決這個問題。

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ]; //物件實字 用大括弧建立物件

  new Chart(
    document.getElementById('acquisitions'), //抓取HTML畫布元素
    {
      type: 'bar', //我們只需要提供一個圖表類型（長條圖）並提供由標籤（通常是資料點的數字或文字描述）和資料集數組組成的資料（Chart.js 支援大多數圖表類型的多個資料集）。 每個資料集都指定有一個標籤並包含一組資料點。
      data: {
        labels: data.map(row => row.year), //目前，我們只有一些虛擬資料條目。 因此，我們提取年份和計數屬性以在唯一資料集中產生標籤和資料點數組。
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
// 我們實例化一個新的 Chart 實例並提供兩個參數（new Chart(畫布元素DOM,選項)）：將呈現圖表的畫布元素（document.getElementById('acquisitions')） 和 選項物件。