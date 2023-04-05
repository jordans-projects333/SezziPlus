import { create } from 'zustand'



export const useStore = create((set) => ({
    pageTransitioning: false,
    confirmSettingsModel: false,
    alertMessage: '',
    alertActive: false,
    accountModelToggle: false,
    addReminderModelToggle: false,
    editReminderModelToggle: false,
    editReminderId: '',
    editReminderType: '',
    editReminderMessage: '',
    editReminderDate: '',
    editReminderTime: '',
    editReminderGoal: '',
    }
))