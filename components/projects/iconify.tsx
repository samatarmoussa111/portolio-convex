"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  className?: string;
  icon: string;
}

export default function Iconify({ className, icon }: Props) {
  return <Icon className={className} icon={icon} />;
}
