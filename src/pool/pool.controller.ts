import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { CreatePoolDto } from "./dto/createpool.dto";
import { PoolService } from "./pool.services";

@Controller('pool')
export class PoolController{
    constructor(private readonly poolService: PoolService) {}

    @Get()
    findAll(){
        return this.poolService.findAll();
    };
    @Get(':poolId')
    findOne(@Param('poolId') poolId: number){
        return this.poolService.findOne(poolId);
    }

    @Post()
    defineStatus(
        poolId: number,
        @Body() createPoolDto: CreatePoolDto,
        ){
        return this.poolService.defineStatus(poolId,createPoolDto);
    }

    @Post(':poolId')
    calPercentile(
        @Param('poolId') poolId: number,
        @Body() createPoolDto: CreatePoolDto,
        ){
        return this.poolService.calPercentile(poolId);
    }
    calNoElements(
        @Param('poolId') poolId: number,
        @Body() createPoolDto: CreatePoolDto,
        ){
        return this.poolService.calNoElements(poolId);
    };


}