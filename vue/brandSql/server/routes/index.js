var express = require('express');
var router = express.Router();
const conn = require("./../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});



router.get("/api/info", (req, res) => {
	let sqlStr = "SELECT*FROM info";
	conn.query(sqlStr, (error, results, fields) => {
		if (error) {
			res.json({
				err_code: 0,
				message: "请求数据失败"
			})
		} else {
			res.json({
				success_code: 200,
				message: results
			})
		}
	})
})
// 添加信息
router.post("/insertinfo/api", (req, res) => {
	// 获取数据
	const name = req.body.name;
	var ctime = new Date();
	const sqlStr = "INSERT INTO info(name, ctime) VALUES (?, ?)";
	const sqlinfo = [name, ctime];
	conn.query(sqlStr, sqlinfo, (error, results, fields) => {
		if (error) {
			res.json({
				err_code: 0,
				message: '添加数据失败'
			});
		} else {
			res.json({
				success_code: 200,
				message: "添加成功!"
			})
		}
	})
})

// 删除信息
router.post("/del/api", (req, res) => {
	// 获取数据
const id=req.body.id;
const sqlStr="DELETE FROM info WHERE id="+id;
	conn.query(sqlStr, (error, results, fields) => {
		if (error) {
			res.json({
				err_code: 0,
				message: '删除失败'
			});
		} else {
			res.json({
				success_code: 200,
				message: "删除成功!"
			})
		}
	})
})
module.exports = router;
