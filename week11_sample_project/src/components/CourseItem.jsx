// [제공] 부모 CourseList로부터 Props를 전달받는 자식 컴포넌트입니다.
export default function CourseItem({ course, onDelete, onToggle }) {
  return (
    <div className="course-row">
      <div className="course-main">
        <input
          className="check"
          type="checkbox"
          checked={course.completed}
          onChange={() => onToggle(course.id)}
          aria-label={`${course.name} 완료 여부`}
        />{/*강의명*/}
        <div>
          <div className={`course-title ${course.completed ? "done" : ""}`}>{/*체크돼있으면 done 클래스 아니면 클래스가 없음*/ }
            {course.name}
          </div>
          <div className="course-id">Course #{course.id}</div>
        </div>{/*강의아이디*/}
      </div>
      <div className="category-cell">
        <span className="category">{course.category}</span>{/*전공인지 선택과목인지*/}
      </div>
      <div className="actions">{/*삭제버튼*/}
        <button
          className="btn danger"
          type="button"
          onClick={() => onDelete(course.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
