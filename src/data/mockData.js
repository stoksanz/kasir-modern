// Mock data untuk aplikasi Guardian Family
// Data ini akan diganti dengan Firebase nanti

export const mockUser = {
  id: '1',
  name: 'Ahmad Rizki',
  email: 'ahmad.rizki@email.com',
  phone: '081234567890',
  avatar: '👨',
  role: 'admin',
  joinedDate: '2024-01-15',
};

export const mockFamilies = [
  {
    id: '1',
    name: 'Keluarga Rizki',
    code: 'FAM123456',
    admin: '1',
    createdAt: '2024-01-15',
    members: [
      {
        id: '1',
        name: 'Ahmad Rizki',
        email: 'ahmad.rizki@email.com',
        phone: '081234567890',
        avatar: '👨',
        role: 'admin',
        status: 'online',
        lastSeen: new Date(),
      },
      {
        id: '2',
        name: 'Siti Nurhaliza',
        email: 'siti.nurhaliza@email.com',
        phone: '081234567891',
        avatar: '👩',
        role: 'member',
        status: 'online',
        lastSeen: new Date(),
      },
      {
        id: '3',
        name: 'Muhammad Ridhwan',
        email: 'ridhwan@email.com',
        phone: '081234567892',
        avatar: '👦',
        role: 'member',
        status: 'offline',
        lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        id: '4',
        name: 'Nur Azizah',
        email: 'azizah@email.com',
        phone: '081234567893',
        avatar: '👧',
        role: 'member',
        status: 'online',
        lastSeen: new Date(),
      },
    ],
  },
];

export const mockActivities = [
  {
    id: '1',
    type: 'member_joined',
    user: 'Nur Azizah',
    action: 'bergabung dengan keluarga',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: '2',
    type: 'member_update',
    user: 'Muhammad Ridhwan',
    action: 'memperbarui profil',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: '3',
    type: 'family_created',
    user: 'Ahmad Rizki',
    action: 'membuat keluarga baru',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export const mockEmergencyContacts = [
  {
    id: '1',
    name: 'Ahmad Rizki',
    phone: '081234567890',
    relationship: 'Ayah',
    avatar: '👨',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    phone: '081234567891',
    relationship: 'Ibu',
    avatar: '👩',
  },
];