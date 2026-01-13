import { create } from "zustand";

export const useJobStore = create((set) => ({
    jobs: [],
    addJob: (job) => set((state) => 
        ({ jobs: [...state.jobs, job, {...job, id: crypto.randomUUID()} ] })),

    updateJob: (id, updatedJob) => set((state) => ({
        jobs: state.jobs.map((job) =>
            job.id === id ? { ...job, ...updatedJob } : job ) } )),

    deleteJob: (id) => set((state) => ({
        jobs: state.jobs.filter((job) => job.id !== id) })),
}));