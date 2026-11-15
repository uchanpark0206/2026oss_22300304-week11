1. Project Information: 프로젝트 소개, 주요 기능 및 원본 Sample Project URL    

    :https://github.com/2026-2-OSS/week11_sample_project

2. Installation: 설치·실행 방법 및 실행 화면

        :
        npm inatall
        npm run dev
3. Source Code Exploration:

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

    function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id));
    }
    :confirm으로 삭제 여부를 확인하고,확인이 돼면 filter로 id가 일치하지 않는 과목만 모은 새 배열을 만들어 setCourses에 전달한다

    {courses.length === 0 && (
    <div className="empty">등록된 과목이 없습니다.</div>)
    }
    {courses.map((course) => (
    <CourseItem
        key={course.id}
        course={course}
        onDelete={handleDelete}
        onToggle={handleToggle}
    />
    :과목이 비어있으면 등록된 과목이 없습니다를 보여주고 아니라면map으로 배열의 각 과목마다 CourseItem을 하나씩 렌더링한다.
))}

4. Customizing

    1.변경 완료

    2-1:My Course Manager=>나의 강의 메니저
    2-2:React Component, Props & State Practice=>리엑트의 개념과리액트 컴포넌트, 속성 및 상태 실습

    3.stat strong.green 에서*#16856c >>#c40909로 변경*/
    .stat strong.blue 에서 *#4568b4>>#021d57로 변경*/
    .small-note 에서  /*#8a94a4에서>>#fc0303로 변경 */

5. Feature Extension:

        function handleAdd(event) {
            event.preventDefault();
            // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화

            if (newName.trim() === "") {
            alert("뭐라도 넣어라");
            return;
            }
            const newCourse = {
                id: Math.max(...courses.map((c) => c.id)) + 1, 
                name: newName, 
                category: "기타", 
                completed: false,
            };
            setCourses((previous) => [...previous, newCourse]);
            setNewName("");
        }
        value={newName}을 통해 input안에 변수의 vlaue가 newName을 통해 사용됨을 파악하고 그것을 .trim을 통애 양옆의 공백을 제거한 input값이 공백이면 뭐라도 넣어라는 경고문과함께 함구에서 빠져나감
        그게 아니라면 couse.map을 통해 아이디만을 찾아서 배열로 만들고 ...즉 스프레드를 통해 map으로 만들어진 리스트를 각각의 값들로 변환하고 그값들 .max가 가장 큰 값을 골라줌 이 일련의 과정을 다 거친 최종 값이에 +1을 한 값을 id에 넣고 이름에는 input을 통애 넣은 값을 그리고 카테고리는 기타 그리고 컴플리티드는 false를 가진 newCourse라는 변수에 저장함
        그후 이전의 벼열을 전부 스프레드한 후 앞써 만든 newCourse를 넣고 다시 배열을 듦
        그후 입력창에 넣었던 값을 다시 빈카으로 만듦
         function handleToggle(id) {
        // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
        setCourses((previous) =>
        previous.map((course) =>
        course.id === id
            ? { ...course, completed: !course.completed }
            : course
            )
            );
        }  
        :기본 데이터에서 id가 handleToggle를 통해 들어온 아이디와 일치한다면
        그 아이디를 가진 코스의 값을 가져가  기존 코스와 반대되는  completed를 넣는다.이렇게 만들어진 값들을 맵이 새 배열로변환해준다
        일치하지 않으면 기존 코스값을
        

6. Deployment: 실제 접근 가능한 Vercel URL

        :https://2026oss-22300304-week11.vercel.app/

7. Weekly Review:

        새롭게 배운 내용 3가지
        :
        1. `course-title ${course.completed ? "done" : ""}`을 보면서 
            ?표 앞에는 조건이 들어가고 :을 기중으로 앞은 참일 때 뒤는 거짓일떄 사용하는 것임을 알게됨
        2. ...이 스프래드이며 배열을 일반 값들의 나열로 바꾸어주는 역할을 하는 함수일을 알게됨
        3. .max가 나열된 값들 중 가장 큰 값을 반환하는 함수임을 알게 됨       

        어려웠던 점과 해결 방법
        :지난 번 과제로 대략적인 흐름은 이해했다고 생각 했으나 막상 실제로 코드를 덧 붙이려고 하니 corselist가 어디 적용 되었고 corseitem이 어디 적용 되는지 그리고 newName과 couse가 어떻게 사용돼었는지 파악하는데 많은 시간이 소요됨

        AI 활용 내용 및 느낀 점
        :
        처음에는 let course_id = 5;을 사용하였으나  handleAdd 안에서 변수를 선언하니 계속 id가 계속 6으로 고정 되는 문제가 발생하였는데 이를 해결하려고 함수 밖에 변수를 선언하자고 하니 교수님이 변경하라는 부분 외부에 건언을 해야하다보니 이를 해결하고자 ai에게 물어본 결과
        Math.max(...courses.map((c) => c.id)) + 1라는 코드를 말려주었음

        느낀점 점점 ai의 능력이 상향됨과 동시에 나의 자리를 위협하는 ai가 새삼 무섭게 느껴짐.