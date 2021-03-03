	const ww = window.innerWidth, wh = window.innerHeight;

		function get(id){
			let obj = document.getElementById(id).style
			obj.position = 'absolute'
			obj.marginTop = '0'
			obj.marginLeft = '0'
			obj.padding = '0'
			obj.width = '0'
			obj.height = '0'
			obj.x = 0;
			obj.Y = 0;
			obj.w = 0;
			obj.h = 0;
			obj.setX = (newX) => {
				obj.X = newX;
				obj.marginLeft = newX+'px';
			}
			obj.setY = (newY) => {
				obj.Y = newY;
				obj.marginTop = newY+'px';
			}
			obj.setW = (newW) => {
				obj.W = newW;
				obj.width = newW+'px';
			}
			obj.setH = (newH) => {
				obj.H = newH;
				obj.height = newH+'px';
			}
			return obj;
		}

		function toNum(str){
			switch(str.charAt(str.lenght()-1)){
				case 'x':
					str = str.substring(0,str.lenght()-2)
					break;
				case '%':
					str = window.innerWidth*(str.substring(0,str.lenght()-2)/100)
					break;		
			}
			return parseInt(str,10);
		}

		function toStr(num){
			return num+'px';
		}

		var body = document.body.style;

		body.margin = '0 0 0 0';