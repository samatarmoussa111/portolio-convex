import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    imgSrc: v.id("_storage"),
    description: v.string(),
    repoLink: v.string(),
    sourceLink: v.string(),
    techIcons: v.array(v.string()),
    content: v.string(),
    isPublished: v.boolean(),
  }),
});
