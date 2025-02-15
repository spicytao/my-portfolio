// src/app/page.tsx
import VortexAnimation from '@/components/BlackHole';

export default function Home() {
  return (
    <main>
      <VortexAnimation />
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
        欢迎来到每日随机数星云漩涡！
      </h1>
    </main>
  );
}
