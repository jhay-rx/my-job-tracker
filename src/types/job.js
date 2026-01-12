export const statuses = [
    "applied",
    "withdrawn",
    "rejected",
    "interviewing",
    "offered",
    "ghosted"
];

export const createJob = (data) =>({
    id: crypto.randomUUID(),
    company: data.company || "",
    position: data.position || "",
    location: data.location || "",
    url: data.url || "",
    dateApplied: data.dateApplied || new Date().toISOString().split("T")[0],
    statuses: data.status || "applied",
    notes: data.notes || "",
    salaryRange: data.salaryRange || "",
    tags: data.tags || []
})
