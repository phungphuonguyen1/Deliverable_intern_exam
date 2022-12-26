import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePoolDto } from './dto/createpool.dto';
import { Pool } from './entity/pool.entity';

@Injectable()
export class PoolService{
    // mock data 
    private pool: Pool[] = [
        {
        poolId: 123456,
        poolValue:[1,2,4,6,9,12],
        },
    ];
    findAll() {
        return this.pool;
    }
    findOne(poolId: number){
        const Pool = this.pool.find(item => item.poolId === +poolId);
        if(!Pool) return "The pool with id " + poolId + " isn't on the server.";
        return Pool;
    }
    checkOne(poolId: number) {
        const Pool = this.pool.find(item => item.poolId === +poolId);
        if (!Pool) {
            return false;
        }
        return true;
    }

    defineStatus(poolId: number,CreatePoolDto: any) {
        if (this.checkOne(poolId)===true){
            return "Appended";    
        }
        else{
            this.pool.push(CreatePoolDto);
            return "Inserted";
        }
    }


    // delete(poolId: number) {
    //     //index is the index of that pool in Pool list
    //     this.pool.splice(poolId, poolId+1);    
    // }

    calPercentile(poolId: number){
        // neet to be sorted 
        for(let i=0;i<this.pool.length;i++){
            if (poolId===+i)
            {
                return 100*i/this.pool.length;
            }
            }
    }

    calNoElements(poolId: number){
        for(let i=0;i<this.pool.length;i++){
            if (poolId===+i){
                return this.pool[i].poolValue.length;
            }
        }
    }
}