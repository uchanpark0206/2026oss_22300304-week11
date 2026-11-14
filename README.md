step2

Project Structure: 주요 파일 3개의 역할:

    App.css:main.jsx의 스타일을 담당
    App.jsx:main.jsx의 기능을 담당
    main.jsx:index.html의 루트에 App.css:main과 App.jsx:main.jsx의 내용을 넣을 준비해 보여주는 렌더링을 담당함


Component & Props: CourseList와 CourseItem의 관계 및 Props 전달 방식:

    CourseList는 전체 레이아웃이고 CourseItem이 내용의 일부로 들어가있다.
    
    <CourseItem
            key={course.id}
            course={course}
            onDelete={handleDelete}
            onToggle={handleToggle}
    />
    를 통해 부모인 CourseList가 자식인 CourseItem에게 course에는 과목을  onDelete와 onToggle에는 CourseList에서 정의한 함수가 Props를 통해 전달된다.

State & Event: useState를 이용한 상태 관리 및 삭제 버튼의 동작 원리:

    filter를 사용해서 해당 id와 일치하지 않는 과목만 모은 새 배열을 만들어 setCourses에 전달한다

Code Analysis: 주요 코드 2개(각 5~15줄)를 선택하여 동작 원리 설명:



STEP 3. Customizing

    1.

    2-1:My Course Manager=>나의 강의 메니저
    2-2:React Component, Props & State Practice=>리엑트의 개념과리액트 컴포넌트, 속성 및 상태 실습

