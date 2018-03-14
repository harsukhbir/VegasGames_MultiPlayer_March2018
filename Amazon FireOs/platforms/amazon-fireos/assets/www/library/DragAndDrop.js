var DragAndDrop = {


	option: null,

	isIOS7orLower: (/iP(hone|od|ad)/.test(navigator.platform) && /OS [1-7][^\d]/.test(navigator.appVersion)),

	isElement: function(o) {
		if (!o || (typeof o !== 'object')) { return false; }

		var _window = DragAndDrop.getWindow(o) || window;

		return (/object|function/.test(typeof _window.Element)
			? o instanceof _window.Element //DOM2
			: o.nodeType === 1 && typeof o.nodeName === "string");
	},

	isWindow: function (thing) { return !!(thing && thing.Window) && (thing instanceof thing.Window); },

	start: function(e) {
		var orig = e.originalEvent;
		var pos = $(this).position();
		offset = {
			x: orig.changedTouches[0].pageX,
			y: orig.changedTouches[0].pageY
		};
		DragAndDrop.options.onstart && DragAndDrop.options.onstart(e);
		DragAndDrop.options.ondropactivate && DragAndDrop.options.ondropactivate(e);
	},
	move: function(e) {
		e.preventDefault();
		var orig = e.originalEvent;
		e.dx = orig.changedTouches[0].pageX - offset.x;
		e.dy = orig.changedTouches[0].pageY - offset.y;
		DragAndDrop.options.onmove && DragAndDrop.options.onmove(e);
	},
	end: function(e) {
		var dropzones = $(DragAndDrop.options.dropElement).get();

		if(dropzones.length >0){
			for(var i =0; i<dropzones.length;i++){
				if(DragAndDrop.dropCheck(this,dropzones[i])){
					DragAndDrop.options.ondrop(e,dropzones[i]);
				}
			}
		}
		DragAndDrop.options.onend && DragAndDrop.options.onend(e);
		DragAndDrop.options.ondropdeactivate && DragAndDrop.options.ondropdeactivate(e);
	},
	dropCheck: function (draggableElement, dropElement) {
		var dropped = false,
			dropOverlap = 0.6,
			rect = DragAndDrop.getRect(dropElement),
			dragRect = DragAndDrop.getRect(draggableElement);
		if(!dragRect || !rect){
			return false;
		}

		var overlapArea  = (Math.max(0, Math.min(rect.right , dragRect.right ) - Math.max(rect.left, dragRect.left))
				* Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top , dragRect.top ))),
			overlapRatio = overlapArea / (dragRect.width * dragRect.height);

		dropped = overlapRatio >= dropOverlap;

		return dropped;
	},

	getRect: function rectCheck (element) {
		element = element || DragAndDrop._element;

	if (element && !(DragAndDrop.isElement(element))) {
			element = this._context.querySelector(this.selector);
		}
		return DragAndDrop.getElementRect(element);
	},

	getElementRect: function(element) {
		var scroll = DragAndDrop.isIOS7orLower
				? { x: 0, y: 0 }
				: DragAndDrop.getScrollXY(DragAndDrop.getWindow(element)),
			clientRect = (element instanceof SVGElement)?
				element.getBoundingClientRect():
				element.getClientRects()[0];

		return clientRect && {
			left  : clientRect.left   + scroll.x,
			right : clientRect.right  + scroll.x,
			top   : clientRect.top    + scroll.y,
			bottom: clientRect.bottom + scroll.y,
			width : clientRect.width || clientRect.right - clientRect.left,
			height: clientRect.heigh || clientRect.bottom - clientRect.top
		};
	},

	getScrollXY: function(win) {
		win = win || window;
		return {
			x: win.scrollX || win.document.documentElement.scrollLeft,
			y: win.scrollY || win.document.documentElement.scrollTop
		};
	},

	getWindow: function (node) {
		if (DragAndDrop.isWindow(node)) {
			return node;
		}

		var rootNode = (node.ownerDocument || node);
		return rootNode.defaultView || rootNode.parentWindow || window;
	},

	init: function rectCheck (options) {
		this.options = options || {};
		$(this.options.dragElement).on("touchstart", this.start);
		$(this.options.dragElement).on("touchmove", this.move);
		$(this.options.dragElement).on("touchend", this.end);
	}
};