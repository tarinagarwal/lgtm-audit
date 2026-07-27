// Real bug so the pipeline actually runs an agent pass.
import { db } from "./db";
export async function get(id:string){return db.query("SELECT * FROM u WHERE id='"+id+"'");}
