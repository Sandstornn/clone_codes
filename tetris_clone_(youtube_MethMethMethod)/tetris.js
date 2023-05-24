const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20,20);


const matrix = [ // 블럭 모양대로 배열 만들어주기.
	[0,0,0],
	[1,1,1],
	[0,1,0]
];

function draw(){ // 보기 쉽게 일반화한다. 그린 후 없데이트 과정들, 굳이 소비자가 생각할 필요 없는 과정들은 draw함수 안에 넣어 단순화 시킨다. 함수형 코딩의 핵심.
	context.fillStyle = '#000';
	context.fillRect(0,0,canvas.width,canvas.height);
	// requestAnimationFrame(update); 함수는 예전 위치의 그림이 지워지지 않는다. 우리는 업데이트 된 위치만 필요하기 때문에, '백지 상태에서' 옮겨진 위치에 블럭을 그려주면 된다.
	
	drawMatrix(player.matrix,player.pos);
}

function drawMatrix(matrix,offset){ // forEach함수는 배열을 순회하게 해주는 callback함수. forEach(number,index)로 number에는 순회하면서의 값이, index에는 위치(index)가 들어간다.
									// 블럭을 그려주는 함수.
	matrix.forEach((row,y) =>{
		row.forEach((value,x) =>{
			if(value!==0){
				context.fillStyle = 'skyblue';
				context.fillRect(x+offset.x,
								 y+offset.y,
								 1,1);
			}
		});
	});
}

function update(){
	draw();
	requestAnimationFrame(update); // 블럭을 한 번만 그리는 게 아니라, offset 값이 바뀜에 따라, 계속해서 블럭을 그릴 수 있게 만든다. 단, 전에 그렸던 그림이 업데이트한다고 없어지지 않는다. 모두 중복해서 그려진다.
}

const player = {
	pos: {x:5,y:5},
	matrix: matrix,
};

update();