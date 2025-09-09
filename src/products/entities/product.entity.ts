import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'amazonia', name: 'v_web_product' })
export class Product {
  @PrimaryColumn({ name: 'product_id', type: 'integer' })
  id: number;

  @Column({ name: 'product_code', type: 'varchar', nullable: true })
  code?: string;

  @Column({ name: 'product_name', type: 'varchar', nullable: true })
  name?: string;

  // @Column({ name: 'description', type: 'varchar', nullable: true })
  // description?: string;

  // @Column({ name: 'sku', type: 'varchar', nullable: true })
  // sku?: string;

  // Podríamos mapear más adelante category, uom, etc.
}
