/**
 * Contact service boundary (frontend-only for now).
 *
 * Swap the mock implementation for a real API client when the backend is
 * available — the contact page and form will not need to change.
 */
export interface ContactPayload {
  name: string
  email: string
  company?: string
  reason?: string
  companySize?: string
  adSpend?: string
  phone?: string
  subject: string
  message: string
}

export type SubmitResult = { ok: true } | { ok: false; error: string }

export interface ContactService {
  submit(payload: ContactPayload): Promise<SubmitResult>
}

class MockContactService implements ContactService {
  submit(payload: ContactPayload): Promise<SubmitResult> {
    void payload
    return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 1200))
  }
}

export const contactService: ContactService = new MockContactService()
