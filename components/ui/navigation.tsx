"use client";
import React from "react";
import { Button } from "./button";
import Image from "next/image";
import Icon from "@/asset/icon.png";

const IMAGE = require("../../asset/icon.png");
export default function Navigation() {
	return (
		<header className=" w-full flex justify-between h-[52px] bg-white flex-row ">
			<div className=" flex  gap-3 flex-row items-center">
				<Button
					variant={"ghost"}
					className=" gap-3"
				>
					<Image
						src={Icon}
						alt="Image"
						className=" w-[41px] h-[41px]"
					/>
					Back to Home
				</Button>
			</div>
			<div className=" flex justify-center items-center">
				<h1 className=" text-black font-semibold">
					Buy eLoad
				</h1>
			</div>
			<div className=" flex flex-row gap-3 justify-center items-center">
				<Button variant={"ghost"}>
					Tracking
				</Button>
				<Button variant={"ghost"}>
					Help
				</Button>
			</div>
		</header>
	);
}
