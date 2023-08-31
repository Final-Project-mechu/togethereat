import { IsNumber, IsString, Length } from 'class-validator';

export class createFoodsIngredientsDto{
    @IsNumber()
    readonly food_id: number;

    @IsNumber()
    readonly ingredient_id: number;
}















