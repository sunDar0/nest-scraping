import { Injectable } from '@nestjs/common';
import * as fs from 'fs';


@Injectable()
export class FileService {
  constructor() {}
  
  async makeFile(path, data)
  {
    let date = new Date();
    
  
    fs.writeFile(`storage/file/${path}.json`, JSON.stringify(data), (err) =>{
      if(err){
        return console.error(err)
      }
      console.log("created file");
    })
  }

  readFile(path)
  {
    return JSON.parse(fs.readFileSync(`storage/file/${path}.json`,'utf-8'));
  }

  hasFile(path, time): boolean
  {
    try{
      let fileStat = fs.statSync(`storage/file/${path}.json`);
      if(((new Date().getTime() - fileStat.mtime.getTime())/1000/60) < time) return true 
    }catch(e){
      return false;
    }
    

    return false
  }
}
