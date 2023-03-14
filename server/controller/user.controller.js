const db =require('../db')
class UserController {
	async createPoint(req, res) {
		const {name_text, f1_int, f2_int, f3_int, f4_int, f5_int} = req.body
		const newPoint = await db.query(`SELECT * FROM ins_function_points ($1, $2, $3, $4, $5, $6)`, [name_text, f1_int, f2_int,f3_int,f4_int,f5_int])
	
		res.json(newPoint.rows[0])
	}
	async getPoints(req, res) {
		const points = await db.query(`SELECT * FROM get_all_function_points()`)
		res.json(points.rows)
	}
	async getOnePoint(req, res) {
		const id = req.params.id
		const point = await db.query(`SELECT * FROM get_function_points($1)`, [id])
		res.json(point.rows[0])
	}
	async updatePoint(req, res) {
		const {id, name_text, f1_int, f2_int, f3_int, f4_int, f5_int} = req.body
		const point = await db.query(`SELECT * FROM upd_function_points($1, $2, $3, $4, $5, $6, $7)`, [id,name_text, f1_int, f2_int,f3_int,f4_int,f5_int])
		res.json(point.rows[0])
	}
	async deletePoint(req, res) {
		const id = req.params.id
		const point = await db.query(`SELECT * FROM del_function_points($1)`, [id])
		res.json(point.rows[0]) 
	}
	
}

module.exports= new UserController()