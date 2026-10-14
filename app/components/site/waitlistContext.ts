"use client";

import { createContext, useContext } from "react";

// Tiny context so any button can open the waitlist modal.
// The provider lives in WaitlistModal.tsx (mounted once, in Shell).
export type WaitlistCtx = { open: () => void };

export const WaitlistContext = createContext<WaitlistCtx>({ open: () => {} });

export const useWaitlist = () => useContext(WaitlistContext);
