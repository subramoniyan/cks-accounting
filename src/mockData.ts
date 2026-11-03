import dayjs from 'dayjs';import type {Employee,SalaryPayment,Transaction} from './types';const d=(n:number)=>dayjs().subtract(n,'day').format('YYYY-MM-DD');export const initialTransactions:Transaction[]=[
{id:'TX-1001',date:d(0),type:'Income',category:'Xerox & Printing',description:'Daily Xerox and printout collections',paymentMode:'Cash',amount:2450},
{id:'TX-1002',date:d(0),type:'Income',category:'Document Writing',description:'Rental agreement and affidavit',paymentMode:'UPI',amount:1800},
{id:'TX-1003',date:d(0),type:'Expense',category:'Shop Supplies',description:'A4 paper and printer ink',paymentMode:'Cash',amount:1250},
{id:'TX-1004',date:d(1),type:'Income',category:'Typing',description:'Tamil and English typing',paymentMode:'Cash',amount:950},
{id:'TX-1005',date:d(1),type:'Expense',category:'Electricity',description:'Electricity bill',paymentMode:'UPI',amount:2200},
{id:'TX-1006',date:d(2),type:'Income',category:'Registration Documents',description:'Sale deed document preparation',paymentMode:'Bank Transfer',amount:5500},
{id:'TX-1007',date:d(2),type:'Expense',category:'Travel',description:'Registration office travel',paymentMode:'Cash',amount:450},
{id:'TX-1008',date:d(3),type:'Income',category:'Xerox & Printing',description:'Colour print and scan',paymentMode:'UPI',amount:1320},
{id:'TX-1009',date:d(4),type:'Expense',category:'Maintenance',description:'Printer service',paymentMode:'Cash',amount:1600},
{id:'TX-1010',date:d(5),type:'Income',category:'Stamp Paper',description:'Stamp paper documentation',paymentMode:'Cash',amount:3200},
{id:'TX-1011',date:d(7),type:'Expense',category:'Office Rent',description:'Shop monthly rent',paymentMode:'Bank Transfer',amount:8500},
{id:'TX-1012',date:d(8),type:'Income',category:'Registration Documents',description:'Gift deed preparation',paymentMode:'UPI',amount:4200},
{id:'TX-1013',date:d(9),type:'Expense',category:'Internet & Phone',description:'Broadband and phone bill',paymentMode:'UPI',amount:999},
{id:'TX-1014',date:d(12),type:'Income',category:'Xerox & Printing',description:'Bulk photocopy order',paymentMode:'Cash',amount:2750},
{id:'TX-1015',date:d(18),type:'Income',category:'Affidavit',description:'Affidavit preparation',paymentMode:'Cash',amount:1500}];
export const initialEmployees:Employee[]=[
{id:'EMP-001',name:'Kumar',role:'Documentation Executive',phone:'94432 83859',monthlySalary:18000,joinDate:'2021-04-01',active:true},
{id:'EMP-002',name:'Priya',role:'Typing Operator',phone:'98765 43210',monthlySalary:15000,joinDate:'2022-06-15',active:true},
{id:'EMP-003',name:'Suresh',role:'Xerox & Printing Operator',phone:'98940 12345',monthlySalary:12000,joinDate:'2023-01-10',active:true}];
export const initialSalaryPayments:SalaryPayment[]=[
{id:'SAL-001',employeeId:'EMP-001',month:dayjs().format('YYYY-MM'),paidDate:d(1),amount:18000,status:'Paid',paymentMode:'Bank Transfer'},
{id:'SAL-002',employeeId:'EMP-002',month:dayjs().format('YYYY-MM'),paidDate:d(1),amount:15000,status:'Paid',paymentMode:'UPI'},
{id:'SAL-003',employeeId:'EMP-003',month:dayjs().format('YYYY-MM'),paidDate:'',amount:12000,status:'Pending',paymentMode:'Cash'}];