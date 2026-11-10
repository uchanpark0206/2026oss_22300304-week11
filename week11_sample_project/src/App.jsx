import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>나의 강의 메니저</h1>
          <p className="subtitle">리엑트의 개념과리액트 컴포넌트, 속성 및 상태 실습</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
