<template>
  <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
    <div class="grid gap-5 md:grid-cols-2">
      <div>
        <label for="contactName" class="label-field">Nom complet *</label>
        <input
          id="contactName"
          v-model="form.name"
          type="text"
          class="input-field"
          :class="{ 'border-emergency': touched.name && errors.name }"
          @blur="touch('name')"
        />
        <p v-if="touched.name && errors.name" class="mt-1 text-xs text-emergency">{{ errors.name }}</p>
      </div>
      <div>
        <label for="contactEmail" class="label-field">Email *</label>
        <input
          id="contactEmail"
          v-model="form.email"
          type="email"
          class="input-field"
          :class="{ 'border-emergency': touched.email && errors.email }"
          @blur="touch('email')"
        />
        <p v-if="touched.email && errors.email" class="mt-1 text-xs text-emergency">{{ errors.email }}</p>
      </div>
    </div>

    <div>
      <label for="contactSubject" class="label-field">Sujet *</label>
      <input
        id="contactSubject"
        v-model="form.subject"
        type="text"
        class="input-field"
        :class="{ 'border-emergency': touched.subject && errors.subject }"
        @blur="touch('subject')"
      />
      <p v-if="touched.subject && errors.subject" class="mt-1 text-xs text-emergency">{{ errors.subject }}</p>
    </div>

    <div>
      <label for="contactMessage" class="label-field">Message *</label>
      <textarea
        id="contactMessage"
        v-model="form.message"
        rows="5"
        class="input-field resize-none"
        :class="{ 'border-emergency': touched.message && errors.message }"
        @blur="touch('message')"
      ></textarea>
      <p v-if="touched.message && errors.message" class="mt-1 text-xs text-emergency">{{ errors.message }}</p>
    </div>

    <div v-if="sent" class="rounded-xl bg-health/10 p-4 text-sm font-medium text-health">
      Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
    </div>
    <p v-if="errorMsg" class="text-sm text-emergency">{{ errorMsg }}</p>

    <button type="submit" class="btn-primary" :disabled="sending">
      {{ sending ? 'Envoi...' : 'Envoyer le Message' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useFormValidation } from '@/composables/useValidation'
import { contactService } from '@/services/api'

const sending = ref(false)
const sent = ref(false)
const errorMsg = ref(null)

const { form, errors, touched, validateAll, touch } = useFormValidation(
  { name: '', email: '', subject: '', message: '' },
  {
    name: { required: true },
    email: { required: true, email: true },
    subject: { required: true },
    message: { required: true, minLength: 10 },
  }
)

async function handleSubmit() {
  if (!validateAll()) return
  sending.value = true
  sent.value = false
  errorMsg.value = null
  try {
    await contactService.send({ ...form })
    sent.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch {
    if (!import.meta.env.PROD) {
      sent.value = true
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
    } else {
      errorMsg.value = 'Impossible d\'envoyer le message. Contactez-nous par téléphone ou WhatsApp.'
    }
  } finally {
    sending.value = false
  }
}
</script>
