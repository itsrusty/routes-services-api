import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { AdminModule } from './admin/admin.module';
import { AdminController } from './admin/admin.controller';
import { EmployeesController } from './employees/employees.controller';
import { AuthController } from './auth/auth.controller';
import { AdminService } from './admin/admin.service';
import { EmployeesService } from './employees/employees.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [AdminModule, EmployeesModule, AuthModule],
  controllers: [AdminController, EmployeesController, AuthController],
  providers: [AdminService, EmployeesService, AuthService],
})
export class AppModule {}
