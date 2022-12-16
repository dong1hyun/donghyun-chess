# donghyun-chess
프로젝트에 대한 사용법, 소개 고칠점 그리고 결론

# 사용법
체스를 두는 법을 안다면 쉽게 즐길 수 있습니다. 백 먼저 시작하고 마우스로 기물을 클릭하고 하늘색 원을 클릭해서 그곳으로 이동할 수 있습니다.
좌측 상단에 뒤로가기 버튼을 누르면 턴당 한 번씩 무르기가 가능합니다.

# 프로젝트에 대한 소개 
해당 프로그램은 흔히들 아는 체스 게임을 html, css, javascript를 이용해서 만든 저만의 체스 (웹)프로그램입니다.

### 장점
1. 사용자가 기물을 아무데나 둘 수 있는 방식이 아니고 실제 체스 규칙에 근거해서, 기물의 이동 가능 영역 내에서만 이동가능하기 때문에 체스를 처음하는 사람도 이 프로그램을 사용할 수 있습니다. 
2. 무르기 기능(undo)을 만들어서 더욱 편리합니다.
3. html요소들의 반응성을 높혔습니다. (체스판 위에서 마우스 커서가 움직였을 때 해당 위치의 칸의 외곽에 점선이 생김)

### 고칠점(다른 것들은 모르겠지만 1, 2은 스스로 많이 부족했다고 느꼈다.)
1. js파일을 용도에 맞게 나누어서 모듈화 시키려고 했지만 html에서 모든 js파일을 가져왔기 때문에 모듈화가 의미가 없어졌다.
2. 반응형 웹에 대한 지식이 부족한 상태에서 설계를 해서 내 노트북에서만 게임이 적절하게 화면에 배치된다.
3. 체스 규칙 중에 캐슬링이라는 특수 이동이 있는데 이동 경로가 상대의 공격 반경과 겹친다면 캐슬링이 불가해야 한다. 그러나 이 부분은 구현하지 못했다. (이유: 난이도와 시간 문제)
4. 체스 규칙 중에 체크 메이트가 아니라 스테일 메이트라는 규칙이 있다. 이러면 무승부가 나게 되는데 이 부분은 구현하지 못했다. (이유: 난이도와 시간 문제)
5. 게임 결과가 나왔을 때(체크 메이트가 됐을 때)에 어떤 이벤트도 구현하지 않아서 이긴 사람이 상당히 서운할 수 있다.

# 결론
3학년 여름 방학 중에 체스 게임에 빠졌을 때 내가 직접 체스 게임을 만들고 싶다는 생각이 들어서 html과 css, javascript에 대해서 공부를 병행하면서 만들었다.
만드는데 2주 정도 걸렸고, 짧은 시간이었지만 나름 실력을 키우는데 도움이 됐고 내 부족한 부분을 많이 발견할 수 있게 만든 프로그램이라고 생각합니다.
