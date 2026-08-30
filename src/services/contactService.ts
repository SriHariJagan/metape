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

class ApiContactService implements ContactService {
  async submit(payload: ContactPayload): Promise<SubmitResult> {
    try {
      const body = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        subject: payload.subject,
        message: payload.message,
        product: 'metape',
      }

      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        return { ok: false, error: data?.message || `Request failed (${res.status})` }
      }

      return { ok: true }
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : 'Network error' }
    }
  }
}

export const contactService: ContactService = new ApiContactService()
