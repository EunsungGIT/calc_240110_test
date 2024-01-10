const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const goals = document.querySelector('#goals');
const result = document.querySelector('#result')
console.log(height, weight, goals, result);

//result 버튼 이벤트 만들기
result.addEventListener('click', function(){
    //적정체중 계산식
    let normal_w = (height.value-100)*0.9
    //초과체중 계산식
    let excess_w = weight.value-normal_w
    //최종 목표 값에 표시
    goals.value = `적정 체중은 ${normal_w}kg 이며 ${excess_w}kg 초과되셨습니다.`
    //팝업창에 최종 목표 값 대입
    window.alert(goals.value)
})