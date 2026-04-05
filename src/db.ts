// Betrothed
// Represents a registered user (couple) on the platform.

export interface betrothed {
  userId: string;        // PK
  email: string;
  name: string;
  passwordHash: string;
  preferences: string;
  joinDate: Date;        // timestamp
}


// Invitation
// A wedding invitation created by a Betrothed user.

export interface nameMap {
  first: string;
  middle?: string;
  last: string;
}

export interface invitation {
  weddingId: string;     // PK
  userId: string;        // FK -> Betrothed.userId
  groomName: nameMap;    // map(string(first, middle, last))
  brideName: nameMap;    // map(string(first, middle, last))
  ceremonyTime: Date;    // timestamp
  isPublished: boolean;
  venueName: string;
  venueAddress: string;
  weddingDate: Date;     // dateTime
  createdAt: Date;       // dateTime
  inviteDeadline: Date;  // timestamp
}


// Invitee
// A guest associated with a specific wedding invitation.

export type rsvpStatus = "pending" | "accepted" | "declined";

export interface invitee {
  inviteeId: string;          // PK
  weddingId: string;          // FK -> Invitation.weddingId
  rsvpId: string;             // FK -> Rsvp.rsvpId
  guestName: string;
  dietaryRestrictions: string;
  attending: boolean;
  token: string;
  plusOneLimit: number;       // Int
  tokenUsed: boolean;
  addedAt: Date;              // timestamp
  rsvpStatus: rsvpStatus;
}


// Rsvp
// The RSVP response submitted by an invitee.

export interface rsvp {
  rsvpId: string;       // PK
  inviteeId: string;    // FK -> Invitee.inviteeId
  attending: boolean;
}


// Relationship summary (for reference):
//
//  betrothed  1  invitation   (one user -> many invitations)
//  invitation 1  invitee      (one wedding -> many invitees)
//  rsvp       1  invitee      (one rsvp <-> one invitee)
