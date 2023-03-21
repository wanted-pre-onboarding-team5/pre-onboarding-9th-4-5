export const getToday: () => string = () => {
  const date = new Date('2023-03-08');
  const nowYear = date.getFullYear();
  let nowMonth = date.getMonth() + 1;
  let nowDate = date.getDate();

  if (nowMonth < 10) {
    nowMonth = '0' + nowMonth;
  }

  if (nowDate < 10) {
    nowDate = '0' + nowDate;
  }

  return nowYear + '-' + nowMonth + '-' + nowDate;
};
