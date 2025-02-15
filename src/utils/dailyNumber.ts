// src/utils/dailyNumber.ts

// 生成每日随机数的函数
export function getDailyRandomNumber(): number {
    const date = new Date();
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const random = Math.sin(seed) * 10000;
    return Math.floor((random - Math.floor(random)) * 100000);
  }
  