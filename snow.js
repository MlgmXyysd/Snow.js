/*!
 * Snow.js JavaScript Library v1.0.2
 *
 * Let your page snowing
 * 
 * https://github.com/MlgmXyysd/Snow.js
 * 
 * Copyright (c) 2013-2022 MeowCat Studio All Rights Reserved
 * Copyright (c) 2002-2022 MlgmXyysd All Rights Reserved
 * Released under the MIT license
 * https://github.com/MlgmXyysd/Snow.js/blob/master/LICENSE
 *
 * Date: 2022-01-05T13:48Z
 */
"use strict";

const snow = {
	/**
	 * Snow configurations
	 */
	info: {
		top: 0,
		left: 0,
		zIndex: 500,
		class: "snowCanvas"
	},
	/**
	 * Snow throughout the page
	 * @param m	{Number} [Optional = 100]	The number of snowflakes in the entire page
	 */
	down: function(m = 100) {
		let f = window.innerWidth;
		let g = window.innerHeight;
		let d = document.createElement("canvas");
		d.style.position = "fixed";
		d.style.pointerEvents = "none";
		d.style.top = snow.info.top + "px";
		d.style.left = snow.info.left + "px";
		d.style.zIndex = snow.info.zIndex;
		d.setAttribute("class", snow.info.class);
		d.width = f;
		d.height = g;
		document.body.appendChild(d);
		let c = [];
		for (let a = 0; a < m; a++) {
			c.push({
				x: Math.random() * f,
				y: Math.random() * g,
				r: Math.random() * 4 + 1,
				n: Math.random() * 70
			})
		}
		let b = d.getContext("2d");
		let e = 0;
		return setInterval(function() {
			b.clearRect(0, 0, f, g);
			b.fillStyle = "rgba(255, 255, 255, 0.6)";
			b.shadowBlur = 5;
			b.shadowColor = "rgba(255, 255, 255, 0.9)";
			b.beginPath();
			for (let j = 0; j < 70; j++) {
				let h = c[j];
				b.moveTo(h.x, h.y);
				b.arc(h.x, h.y, h.r, 0, Math.PI * 2, 0)
			}
			b.fill();
			e += 0.01;
			for (let j = 0; j < 70; j++) {
				let h = c[j];
				h.y += Math.cos(e + h.n) + h.r / 2;
				h.x += Math.sin(e) * 2;
				if (h.x > f + 5 || h.x < -5 || h.y > g) {
					c[j] = j % 3 > 0 ? {
						x: Math.random() * f,
						y: -10,
						r: h.r,
						n: h.n
					}: Math.sin(e) > 0 ? {
						x: -5,
						y: Math.random() * g,
						r: h.r,
						n: h.n
					}: {
						x: f + 5,
						y: Math.random() * g,
						r: h.r,
						n: h.n
					}
				}
			}
		}, 15);
	}
};
