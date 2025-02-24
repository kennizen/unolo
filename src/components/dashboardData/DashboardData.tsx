"use client"

import { TABLE_DATA, TABLE_DATA_2 } from "@/constants/dashboardData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CircleHelp, Dot, Search } from "lucide-react";
import Image from "next/image";
import { Card } from "../card/Card";
import { Badge } from "../ui/badge";
import { CustomInput } from "../ui/CustomInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
      type: "pie",
    },
  ],
  accessibility: {
    enabled: false,
  },
  chart: {
    height: "250px",
  },
  credits: {
    enabled: false,
  },
};

export const DashboardData = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <Card.CardHeader>
            <div className="flex items-center border-b pb-2">
              <p className="px-2 font-semibold">Real time Status</p>
              <CircleHelp size={18} />
            </div>
          </Card.CardHeader>
          <Card.CardContent>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Card.CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <Card.CardHeader>
              <div className="flex items-center border-b pb-2">
                <p className="px-2 font-semibold">
                  Punched In (inactive) Employees
                </p>
                <CircleHelp size={18} className="flex-shrink-0" />
              </div>
            </Card.CardHeader>
            <Card.CardContent>
              <div className="flex h-full items-center justify-center p-4 text-2xl font-bold">
                3
              </div>
            </Card.CardContent>
          </Card>
          <Card>
            <Card.CardHeader>
              <div className="flex items-center border-b pb-2">
                <p className="px-2 font-semibold">Staffing Strength</p>
                <CircleHelp size={18} />
              </div>
            </Card.CardHeader>
            <Card.CardContent>
              <div className="flex h-full items-center justify-center p-4 text-2xl font-bold">
                0 / 0
              </div>
            </Card.CardContent>
          </Card>
        </div>
      </div>
      <Card>
        <Card.CardHeader>
          <div className="flex items-center border-b pb-2">
            <p className="px-2 font-semibold">Teamwise Attendance</p>
            <CircleHelp size={18} />
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="flex flex-col gap-2 overflow-auto p-4 text-sm">
            <div className="grid grid-cols-3 items-center">
              <p>Hogwarts</p>
              <div className="flex items-center gap-1">
                <Dot />
                <span>0</span>
              </div>
              <div className="flex items-center gap-1">
                <Dot />
                <span>1</span>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <p>John Wick</p>
              <div className="flex items-center gap-1">
                <Dot />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Dot />
                <span>5</span>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <p>Dragonball</p>
              <div className="flex items-center gap-1">
                <Dot />
                <span>1</span>
              </div>
              <div className="flex items-center gap-1">
                <Dot />
                <span>0</span>
              </div>
            </div>
          </div>
        </Card.CardContent>
      </Card>

      <Card>
        <Card.CardHeader>
          <div className="flex items-center justify-between">
            <p className="px-2 font-semibold">Employees (9)</p>

            <form
              className="flex flex-wrap items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Select>
                <SelectTrigger className="w-[5rem]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="old">Old</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <CustomInput
                type="text"
                placeholder="Search Here"
                className="max-w-[7rem]"
                startIcon={<Search className="text-gray-400" size={18} />}
              />
            </form>
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <Table className="h-full">
            <TableHeader className="bg-gray-500">
              <TableRow>
                <TableHead className="w-[30%] rounded-tl-lg text-white">
                  Employees
                </TableHead>
                <TableHead className="text-white">
                  <div className="flex items-center gap-1">
                    <hr className="h-[1.1rem] w-[2px] bg-gray-300" /> Attendance
                  </div>
                </TableHead>
                <TableHead className="gap-1 rounded-tr-lg text-white">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <hr className="h-[1.1rem] w-[2px] bg-gray-300" /> Last
                    Location
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border">
              {TABLE_DATA.map((data, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex w-[150px] items-center gap-2 whitespace-nowrap">
                      <hr className="h-[1.5rem] w-[2px] flex-shrink-0 bg-gray-500" />
                      <Image
                        src={`https://ui-avatars.com/api/?name=${data.name}&background=${data.bg_color}&color=fff`}
                        alt={data.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                        unoptimized
                      />
                      {data.name}
                    </div>
                  </TableCell>
                  <TableCell>{data.attendance}</TableCell>
                  <TableCell>{data.last_location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card.CardContent>
      </Card>

      <Card>
        <Card.CardHeader>
          <div className="flex items-center justify-between">
            <p className="px-2 font-semibold">Off Duty Employees (1)</p>

            <form
              className="flex flex-wrap items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Select>
                <SelectTrigger className="w-[5rem]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="old">Old</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <CustomInput
                type="text"
                placeholder="Search Here"
                className="max-w-[7rem]"
                startIcon={<Search className="text-gray-400" size={18} />}
              />
            </form>
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <Table className="h-full">
            <TableHeader className="bg-gray-500">
              <TableRow>
                <TableHead className="w-[30%] rounded-tl-lg text-white">
                  Employees
                </TableHead>
                <TableHead className="text-white">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <hr className="h-[1.1rem] w-[2px] bg-gray-300" /> Team Name
                  </div>
                </TableHead>
                <TableHead className="gap-1 rounded-tr-lg text-white">
                  <div className="flex items-center gap-1">
                    <hr className="h-[1.1rem] w-[2px] bg-gray-300" /> Status
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border">
              {TABLE_DATA_2.map((data, idx) => (
                <TableRow key={idx} className="">
                  <TableCell>
                    <div className="flex w-[150px] items-center gap-2 whitespace-nowrap">
                      <hr className="h-[1.5rem] w-[2px] flex-shrink-0 bg-gray-500" />
                      <Image
                        src={`https://ui-avatars.com/api/?name=${data.name}&background=${data.bg_color}&color=fff`}
                        alt={data.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                        unoptimized
                      />
                      {data.name}
                    </div>
                  </TableCell>
                  <TableCell>{data.team_name}</TableCell>
                  <TableCell>{data.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card.CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <Card.CardHeader>
            <p className="px-2 font-semibold">Forms Filled</p>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="flex flex-col gap-2">
              <p className="relative text-3xl font-semibold after:absolute after:bottom-1 after:text-sm after:content-['▲0%']">
                0
              </p>
              <Badge className="w-fit bg-gray-700">0 Yesterday</Badge>
            </div>
          </Card.CardContent>
        </Card>
        <Card>
          <Card.CardHeader>
            <p className="px-2 font-semibold">Photos Uploaded</p>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="flex flex-col gap-2">
              <p className="relative text-3xl font-semibold after:absolute after:bottom-1 after:text-sm after:content-['▲400%']">
                5
              </p>
              <Badge className="w-fit bg-gray-700">1 Yesterday</Badge>
            </div>
          </Card.CardContent>
        </Card>
        <Card>
          <Card.CardHeader>
            <p className="px-2 font-semibold">New Clients</p>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="flex flex-col gap-2">
              <p className="relative text-3xl font-semibold after:absolute after:bottom-1 after:text-sm after:content-['▲0%']">
                0
              </p>
              <Badge className="w-fit bg-gray-700">0 Yesterday</Badge>
            </div>
          </Card.CardContent>
        </Card>
        <Card>
          <Card.CardHeader>
            <p className="px-2 font-semibold">Orders Submitted</p>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="flex flex-col gap-2">
              <p className="relative text-3xl font-semibold after:absolute after:bottom-1 after:text-sm after:content-['▲0%']">
                0
              </p>
              <Badge className="w-fit bg-gray-700">0 Yesterday</Badge>
            </div>
          </Card.CardContent>
        </Card>
      </div>

      <Card>
        <Card.CardHeader>
          <div className="flex items-center border-b pb-2">
            <p className="px-2 font-semibold">Real time Status</p>
            <CircleHelp size={18} />
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Card.CardContent>
      </Card>
    </div>
  );
};
