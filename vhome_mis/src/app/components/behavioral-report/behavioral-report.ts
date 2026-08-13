import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export type IncidentSeverity = 'Mild' | 'Moderate' | 'Severe' | 'Critical';
export type IncidentStatus =
  | 'Active Escalation'
  | 'Monitoring / De-escalating'
  | 'Restored to Baseline'
  | 'Closed & Reviewed';

export interface AbcBreakdown {
  antecedents: string[]; // e.g., ['Noise Level', 'Denied Request']
  antecedentNotes?: string;
  behaviorTypes: string[]; // e.g., ['Physical Aggression', 'Property Damage']
  behaviorNotes: string; // Detailed narrative of the behavior
  consequences: string[]; // e.g., ['Moved to Quiet Space', 'PRN Administered']
  consequenceNotes?: string;
}

export interface ObservationNote {
  id: string;
  timestamp: Date;
  staffName: string;
  shiftName: string;
  residentState: 'Agitated' | 'Calming' | 'Baseline' | 'Asleep';
  note: string;
}

export interface BehavioralIncident {
  id: string;
  residentId: string;
  residentName: string;
  location: string;
  occurredAt: Date;
  status: IncidentStatus;
  severity: IncidentSeverity;

  // ABC Behavioral Analysis
  abc: AbcBreakdown;

  // Involved Parties
  targetedPerson?: string; // e.g., "Peer (Resident B)", "Staff", "None"
  reportingStaff: string;
  involvedStaff: string[];

  // Continuous Shift Tracking
  observations: ObservationNote[];

  // Post-Incident Safety & Review
  injuryOccurred: boolean;
  staffDebriefCompleted: boolean;
  bspReviewRequired: boolean;
  linkedHandoverId?: string; // Single light reference to main handover
}

@Component({
  selector: 'app-behavioral-report',
  imports: [MatIconModule, DatePipe, RouterLink, MatButtonModule],
  templateUrl: './behavioral-report.html',
  styleUrl: './behavioral-report.scss',
})
export class BehavioralReport {
  caseData: BehavioralIncident = {
    id: 'Incident-ID',
    residentId: '1',
    residentName: 'ResidentName',
    location: 'Location',
    occurredAt: new Date(),
    status: 'Active Escalation',
    severity: 'Critical',
    abc: {
      antecedents: ['ANTECENDENT1'],
      antecedentNotes: 'ANTECEDENT_NOTE1',
      behaviorTypes: ['BEHAVIOR_TYPE1'],
      behaviorNotes: 'BEHAVIOR_NOTE1',
      consequences: ['CONSEQUENCES1'],
      consequenceNotes: 'CONSEQUENCE_NOTE1',
    },
    targetedPerson: 'TARGET',
    reportingStaff: 'REPORTING_STAFF',
    involvedStaff: ['INVOLVED_STAFF1'],

    observations: [
      {
        id: '12345',
        note: 'OBS_NOTE',
        residentState: 'Asleep',
        shiftName: 'NIGHT',
        staffName: 'OBS_STAFF',
        timestamp: new Date(),
      },
    ],

    injuryOccurred: false,
    staffDebriefCompleted: false,
    bspReviewRequired: false,
    linkedHandoverId: '11111', // Single light reference to main handover
  };

  openAddNoteModal() {}
}
