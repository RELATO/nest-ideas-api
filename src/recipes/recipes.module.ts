import { Module } from '@nestjs/common';
import { CustomDateScalar } from './common/scalar/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesResolver, RecipesService, CustomDateScalar],
})
export class RecipesModule {}