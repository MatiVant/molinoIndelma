import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ schema: 'amazonia', name: 'v_web_bpartner' })
export class Bpartner {
  @PrimaryColumn({ name: 'bpartner_id', type: 'integer' })
  id: number;

  @Column({ name: 'bpartner_code', type: 'varchar', nullable: true })
  code?: string;

  @Column({ name: 'bpartner_name', type: 'varchar', nullable: true })
  name?: string;

  // @Column({
  //   name: 'bpartner_name_fiscal_number',
  //   type: 'varchar',
  //   nullable: true,
  // })
  // fiscalNumber?: string;

  // @Column({ name: 'bpartner_addres', type: 'varchar', nullable: true })
  // address?: string;

  // @Column({ name: 'bpartner_phone', type: 'varchar', nullable: true })
  // phone?: string;
}
