import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schedule from 'node-schedule'
import { syncBlogs } from "../(services)/blogs.service";

const prisma = new PrismaClient();

function generateCronString(frequency, hour, minute) {
    switch (frequency) {
        case "H12":
            return "* */12 * * *"
        case "daily":
            return `${minute} ${hour} * * *`
        default:
            return '* * * * * *'
    }
}


export async function POST(request: NextRequest) {
    // data base operations
    try {
        const body = await request.json()
        console.log(new Date(2012, 11, 21, 5, 30, 0))
        console.log(new Date())

        const date = new Date(body.date);
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();

        const d2 = date.setSeconds(date.getSeconds() + 20);

        console.log({ hour, minute })

        const cronString: string = generateCronString(body.frequency, hour, minute)

        const job = schedule.scheduleJob(date, function () {
            console.log('Cron started at date:', date)

            console.log('Cron started at frequency:', cronString)
            schedule.scheduleJob(cronString, function () {
                console.log('rruning on date:', date)
                syncBlogs().then((resp) => {
                    console.log('success');
                }).finally(() => {
                    // update operation
                })
            });
        });

        return NextResponse.json({ status: "success" });

    } catch (error) {
        console.log(error)
    }


}