### Reflow & Repaint가 발생하는 경우
- DOM 요소 추가/삭제
- 요소의 크기나 위치 변경 (width, height, top, left, margin 등)
- 페이지 구조 변경 (display, position, float, clear)
- 창 크기 변경 (Responsive Layout)
- 폰트 크기 변경 (font-size)
- 콘텐츠 변경으로 인해 요소 크기가 바뀌는 경우


### Repaint만 발생하는 경우
- 요소의 색상 변경 (color, background-color, border-color)
- 텍스트 색상 변경
- 투명도 변경 (opacity)
- 그림자 효과 (box-shadow)

 Reflow가 성능에 더 큰 비용이 발생하므로 가능한 한 피하는 것이 좋습니다.
### Demo
![image](https://github.com/user-attachments/assets/4c56bc24-9497-45be-a9b1-a969d4ce2bb0)

Demo file : 초록 박스를 right 속성의 변경과 transform 두 가지를 사용해서 오른쪽으로 이동시킨다.
- 첫 번째 방식은 리플로우와 리페인트가 같이 일어난다.
- 두 번째 방식은 리페인트만 일어난다.
- 크롬 개발자 도구를 활용하여 실제로 확인하여 본다.
----
----
## 결과
![image](https://github.com/user-attachments/assets/b275a84d-1aec-4ed8-9cfe-b67ae5c9528b)
![image](https://github.com/user-attachments/assets/fe78b165-b25a-426f-a6a6-d7d86c1276d6)  

첫 번째 방식으로 했을 경우 리플로우와 리페인트가 순차적으로 일어나는 것을 확인 할 수 있다.

![image](https://github.com/user-attachments/assets/d524d249-bb5a-4507-a0a6-e49b1dea07fa)

두 번째 방식으로 했을 경우 리페인트만 일어나는 것을 확인 할 수 있다.

-> 
