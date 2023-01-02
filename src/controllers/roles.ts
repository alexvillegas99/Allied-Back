import { Request, Response } from "express";
import pool from "../database";

class Roles {
  public async list(req: Request, res: Response): Promise<void> {
    const result = await pool.query(
      `select * from rol ORDER BY id ASC`
    );
    res.json(result);
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const result = await pool.query(
      `select * from rol where id = ?  order by id ASC`,
      [id]
    );
    if (result.length > 0) {
      return res.json(result[0]);
    }
    res.status(404).json({ text: "El registro no existe" });
  }
  public async create(req: Request, res: Response): Promise<void> { 
    
    try {
      const result = await pool.query(`INSERT INTO rol set ? `, [
        req.body,
      ]);
      res.json({ message: "Ok" });
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query(`UPDATE rol set ? WHERE id = ? `, [req.body, id]);
      res.json({ message: "Ok" });
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query(`DELETE rol  WHERE id = ? `, [id]);
      res.json({ message: "Ok" });
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  }
}

const roles = new Roles();
export default roles;
